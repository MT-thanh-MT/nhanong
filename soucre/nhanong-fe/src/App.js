import { ConfigProvider } from 'antd';
import { AppRoutes } from '~/routes';

const antdThemeConfig = {
  token: {
    colorPrimary: '#a0d911',
    borderRadius: 16,
    colorBorder: '#D0D5DD',
    colorBorderSecondary: '#D0D5DD'
  },
}

function App() {
  return (
    <ConfigProvider theme={antdThemeConfig}>
      <AppRoutes />
    </ConfigProvider>
  );
}

export default App;
