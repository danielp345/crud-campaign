import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import List from "./components/List"
import CreateButton from "./components/CreateButton"
import { CampaignProvider } from "./context/CampaignContext"

function App() {
	return (
		<CampaignProvider>
			<Router>
				<div className="app">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<CreateButton />
									<List />
								</>
							}
						/>
					</Routes>
				</div>
			</Router>
		</CampaignProvider>
	)
}

export default App
