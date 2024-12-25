import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { useSettings } from './providers/SettingsProvider';
import { AppRouting } from './routing';
import { PathnameProvider } from './providers';


const App = () => {
  const { settings } = useSettings();

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add(settings.themeMode);
  }, [settings]);

  return (
    <HashRouter>
      <PathnameProvider>
        <AppRouting />
      </PathnameProvider>
    </HashRouter>
  );
};

export { App };
