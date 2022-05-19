import { Button, RadioGroup, Radio } from 'vant'
import { App } from 'vue'
export default {
  install: (app: App): void => {
    app.use(Button)
      .use(RadioGroup)
      .use(Radio)
  }
}
