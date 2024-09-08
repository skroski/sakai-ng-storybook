import { moduleMetadata, type Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { HttpClientModule } from "@angular/common/http";
setCompodocJson(docJson);
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

const preview: Preview = {
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
    }),
    /* withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }), */
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      canvas: { sourceState: 'shown' }
    },
    backgrounds: {
      values:
        [
          { name: "black", value: "#222" },
          { name: "dark", value: "#444" },
          { name: "light", value: "#f8f8f8" },
          { name: "white", value: "#fff" },

        ],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
};

export default preview;
/* function withThemeByClassName(arg0: { themes: { light: string; dark: string; }; defaultTheme: string; }): import("@storybook/types").DecoratorFunction<import("@storybook/angular").AngularRenderer, { [x: string]: any; }> {
  throw new Error("Function not implemented.");
} */

