import List from "./components/List"
import Header from "./components/Header"
import CreateButton from "./components/CreateButton"
import { CampaignProvider } from "./context/CampaignContext"

function App() {
	return (
		<CampaignProvider>
			<div className="app">
				<Header />
				<CreateButton />
				<List />
			</div>
		</CampaignProvider>
	)
}

export default App
