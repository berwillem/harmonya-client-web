import { TextField, Button } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import "./SignInModal.css";

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
        <form className="modal-form">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
          />
          <TextField
            label="Mot de passe"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
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
