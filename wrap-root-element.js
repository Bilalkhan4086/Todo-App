

import { ThemeProvider } from 'theme-ui'
import {deep} from './theme'

export default wrapRootElement({children}) (
  <ThemeProvider theme={deep}>
      {children}
 </ThemeProvider>
)