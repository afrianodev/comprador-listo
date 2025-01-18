import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice'
import {useNavigate} from 'react-router-dom'


export default function OAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () => {
        try {
          const provider = new GoogleAuthProvider();
          const auth = getAuth(app);
    
          const result = await signInWithPopup(auth, provider);
    
          const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            }),
          });
          const data = await res.json();
          dispatch(signInSuccess(data));
          navigate('/');
        } catch (error) {
          console.log('could not sign in with google', error);
        }
    }

  return (
    <button type='button' className='bg-white text-black border rounded-lg py-2 font-semibold flex gap-2 items-center justify-center hover:opacity-70' onClick={handleGoogleClick}>
        Continuar con Google
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgnsA30cuotFo7pRgiKq2rthhi8RKQIBOUQ&s" alt="google logo" className='h-[20px]' />
      </button>
  )
}
