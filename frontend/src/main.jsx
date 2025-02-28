import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { persistor, store } from './redux/store.js';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { removeUser } from './redux/user/userSlice';

const Root = () => {
  const [sessionChecked, setSessionChecked] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    async function validateSession() {
      try {
        const response = await fetch('/api/auth/check-auth', {
          method: 'GET',
          credentials: 'include',
        });

        const data = await response.json();

        if (!data.success) {
          console.warn(data.message)
          dispatch(removeUser());
          await persistor.purge();
        }
      } catch (error) {
        console.error('Session validation error:', error);
        dispatch(removeUser());
        await persistor.purge();
      } finally {
        setSessionChecked(true);
      }
    }

    validateSession();

    const intervalId = setInterval(
      () => {
        validateSession()
      },
      5 * 60 * 1000,
    )

    return () => clearInterval(intervalId)
  }, [dispatch]);

  if (!sessionChecked) {
    return null;
  }

  return (
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Root />
  </Provider>
);
