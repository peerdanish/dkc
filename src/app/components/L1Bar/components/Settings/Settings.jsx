import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaHeart, FaShoppingCart } from 'react-icons/fa';
import classes from './Settings.module.css'; 

export const Settings = (props) => {
	// eslint-disable-next-line react/prop-types
	const { onClose } = props;
  return (
    <div className={classes.navbar}>
      <Link to="/my-account" className={classes.navItem} onClick={onClose}>
        <FaUser className={classes.icon} />
        <span>My Account</span>
      </Link>
      <Link to="/message" className={classes.navItem} onClick={onClose}>
        <FaEnvelope className={classes.icon} />
        <span>Message</span>
      </Link>
      <Link to="/wishlist" className={classes.navItem} onClick={onClose}>
        <FaHeart className={classes.icon} />
        <span>Wishlist</span>
      </Link>
      <Link to="/my-cart" className={classes.navItem} onClick={onClose}>
        <FaShoppingCart className={classes.icon} />
        <span>My Cart</span>
      </Link>
    </div>
  );
};
