import { TextField, Checkbox, FormControlLabel } from "@mui/material";
import "./SignUpModal.css";
import { IoMdClose } from "react-icons/io";
import { registerUser } from "@/services/auth";
import { useAuthStore } from "@/stores/StoreUser";

interface SignUpModalProps {
  open: boolean;
  handleClose: () => void;
  onSwitchToSignIn: () => void; // New prop for switching to Sign In modal
}

export default function SignUpModal({
  open,
  handleClose,
  onSwitchToSignIn,
}: SignUpModalProps) {
  const { login } = useAuthStore();
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <hr />

        <div className="modal-header">
          <IoMdClose className="modal-close" onClick={handleClose}>
            ×
          </IoMdClose>
          <h3 style={{ fontWeight: "500" }}>Connexion ou Inscription</h3>
        </div>

        <h2
          style={{
            margin: "29px 0 15px 0",
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
            const firstName = e.target.firstName.value;
            const lastName = e.target.lastName.value;
            const phone = e.target.phone.value;

            registerUser({
              email,
              password,
              firstName,
              lastName,
              client: { phone },
              userType: "client",
            }).then((res) => {
              console.log(res.data);
              handleClose();
              login(res.data.user, res.data.token);
            });

            console.log(email, password);
          }}
        >
          <div className="half-width-inputs">
            <TextField
              label="Nom"
              variant="outlined"
              fullWidth
              margin="normal"
              name="lastName"
            />
            <TextField
              label="Prénom"
              variant="outlined"
              fullWidth
              margin="normal"
              name="firstName"
            />
          </div>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            margin="normal"
            name="email"
          />
          <TextField
            label="Numéro de Téléphone"
            variant="outlined"
            fullWidth
            type="tel"
            margin="normal"
            name="phone"
          />
          <TextField
            label="Mot de passe"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
            name="password"
          />
          <TextField
            label="Confirmer votre mot de passe"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <>
                J'ai lu et j'accepte les{" "}
                <a href="/">conditions d'utilisation</a>
              </>
            }
          />
          <button
            type="submit"
            style={{ marginTop: "1rem" }}
            className="btn-black"
          >
            Créer votre compte
          </button>
        </form>
        <p className="modal-footer">
          Vous avez déjà un compte ?{" "}
          <a onClick={() => onSwitchToSignIn()}>Connectez-vous</a>
        </p>
      </div>
    </div>
  );
}
