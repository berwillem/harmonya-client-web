import { TextField } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import "./SignInModal.css";
import { loginUser } from "@/services/auth";
import { useAuthStore } from "@/stores/StoreUser";

interface SignInModalProps {
  open: boolean;
  handleClose: () => void;
  onSwitchToSignUp: () => void; // New prop for switching to Sign Up modal
}

export default function SignInModal({
  open,
  handleClose,
  onSwitchToSignUp,
}: SignInModalProps) {
  const { login, user } = useAuthStore();
  console.log(user);
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        style={{ height: "unset", minHeight: "unset" }}
      >
        <hr />

        <div className="modal-header">
          <IoMdClose className="modal-close" onClick={handleClose} />
          <h3 style={{ fontWeight: "500" }}>Connexion ou Inscription</h3>
        </div>

        <h2
          style={{
            margin: "36px 0 15px 0",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Bienvenue sur Harmonya
        </h2>
        <form
          className="modal-form"
          onSubmit={(e: any) => {
            e.preventDefault();

            const email = e.target.email.value;
            const password = e.target.password.value;

            loginUser({ email, password }).then((res) => {
              console.log(res.data);
              handleClose();
              login(res.data.user, res.data.token);
            });

            console.log(email, password);
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="email"
          />
          <TextField
            label="Mot de passe"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
          />
          <button
            type="submit"
            style={{ marginTop: "1rem" }}
            className="btn-black"
          >
            Se connecter
          </button>
        </form>
        <p className="modal-footer">
          Vous n'avez pas de compte ?{" "}
          <a href="#" onClick={onSwitchToSignUp}>
            Créez votre compte ici
          </a>
        </p>
      </div>
    </div>
  );
}
