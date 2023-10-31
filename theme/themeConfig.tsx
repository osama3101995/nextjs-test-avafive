// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  components: {
    Divider : {
        margin : 10,
        marginLG : 16
    },
    Tabs : {
      inkBarColor : "#F1F1F1",
    },
    Table : {
      rowHoverBg : "#fff",
    },
    Input : {
      borderRadiusLG : 4,
      colorBgContainer : '#F1F1F1',
      hoverBorderColor :  '#F1F1F1',
      colorTextPlaceholder : '#626262',
      activeBorderColor :  '#F1F1F1',
      colorBorder : '#F1F1F1'
    }
  },

};

export default theme;