
import { SFC, ReactNode} from 'react'

interface Props {
  children?: ReactNode
}

const App: SFC<Props> = ({children}) => {

  return <div>{children}</div>

}

export default App;
