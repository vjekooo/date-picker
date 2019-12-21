
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import { hot } from 'react-hot-loader/root'

const GlobalStyle = createGlobalStyle`	
	* {
		box-sizing: border-box;
	}
	body {
		background-color: #F7F7F7;
		margin: 0;
	}
`

const theme = {
	bg: 'white',
	font: 'Avenir'
}

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 600px;
  padding-right: 10px;
  padding-left: 10px;
  font-family: ${(props): string => props.theme.font};
  background-color: ${(props): string => props.theme.bg};
`

const App: React.FC = (): JSX.Element => (
	<ThemeProvider theme={theme}>
		<Wrapper>
			<div>
				aaaaa
			</div>	
		</Wrapper>
		<GlobalStyle />
	</ThemeProvider>
)

export default hot(App)
