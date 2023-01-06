import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  Box,
  Button,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';

// Hooks
import { useTheme } from './shared/hooks/use-theme.hook';

// Stpres
import { useThemeStore } from './shared/stores/use-theme.store';

// Styles
import styles from './App.module.scss';

// Types
import { Theme } from './shared/types/shared.types';

// UI
import { Icon } from './shared/ui/Icon/Icon';

// Utils
import './shared/utils/i18n';
import './shared/utils/fa';

function App() {
  const queryClient = new QueryClient();
  const { activeThemeGet } = useTheme();
  const { i18n, t } = useTranslation();

  // Theme store state
  const [theme, setTheme] = useThemeStore((state) => [
    state.theme,
    state.setTheme,
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={activeThemeGet()}>
          <CssBaseline />
          <div className={styles['app']}>
            <Box
              className={styles['app-header']}
              sx={{ borderColor: 'border.app' }}
            >
              <div className={styles['app-header-text']}>{t('app.hello')}</div>
              <Icon icon={['fas', theme === Theme.Dark ? 'moon' : 'sun']} />
            </Box>
            <div className={styles['app-content']}>
              <Button
                onClick={() =>
                  setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
                }
              >
                {t('app.theme.toggle')}
              </Button>
              <Button
                onClick={() => {
                  i18n.language === 'en'
                    ? i18n.changeLanguage('de')
                    : i18n.changeLanguage('en');
                }}
              >
                {i18n.language === 'en'
                  ? t('app.language.german')
                  : t('app.language.english')}
              </Button>
            </div>
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default App;
