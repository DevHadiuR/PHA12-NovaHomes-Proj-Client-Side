import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// import auth from "../../firebase/firebase.config";
// import auth from "../firebase/Firebase.config";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hook/useAxiosPublic";

const googProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const twitProvider = new TwitterAuthProvider();

export const ProjectContext = createContext(null);

const ReactProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // get token and store in client site
        const userInfo = {
          email: currentUser.email,
        };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          console.log(res.data);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoader(false);
          }
        });
      } else {
        // remove token(if token stored in the client site)
        localStorage.removeItem("access-token");
        setLoader(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const logoutUser = async () => {
    setLoader(true);

    return signOut(auth);
  };

  const googleProvider = () => {
    setLoader(true);
    return signInWithPopup(auth, googProvider);
  };

  const gitHubProvider = () => {
    setLoader(true);
    return signInWithPopup(auth, gitProvider);
  };
  const twitterProvider = () => {
    setLoader(true);
    return signInWithPopup(auth, twitProvider);
  };

  const projectInfo = {
    createUser,
    loginUser,
    user,
    logoutUser,
    googleProvider,
    gitHubProvider,
    twitterProvider,
    loader,
    setUser,
    updateUser,
  };

  return (
    <ProjectContext.Provider value={projectInfo}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ReactProvider;

ReactProvider.propTypes = {
  children: PropTypes.node,
};
