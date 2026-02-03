import type { ThemeConfig } from 'antd';

export const pastelTheme: ThemeConfig = {
  token: {
    colorPrimary: '#FFC8DD', // Pastel Pink
    colorInfo: '#A2D2FF',    // Pastel Blue
    colorSuccess: '#B9FBC0', // Pastel Green
    colorWarning: '#FFFFD1', // Pastel Yellow
    colorError: '#FF9B9B',
    colorBgLayout: '#FFF9F9',
    colorTextBase: '#4A4A4A',
    borderRadius: 12,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  components: {
    Button: {
      colorPrimary: '#FFC8DD',
      colorTextLightSolid: '#4A4A4A',
      colorPrimaryHover: '#FFB1CF',
      colorPrimaryActive: '#FFA4C5',
    },
    Typography: {
      colorTextHeading: '#4A4A4A',
    },
    Layout: {
      headerBg: '#ffffff',
      bodyBg: '#FFF9F9',
      footerBg: '#ffffff',
    },
  },
};
