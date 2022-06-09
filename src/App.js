import List from "./components/List"
import Header from "./components/Header"
import CampaignForm from "./components/CampaignForm"
import { CampaignProvider } from "./context/CampaignContext"

function App() {
	return (
		<CampaignProvider>
			<div className="app">
				<Header />
				<CampaignForm />
				<List />
			</div>
		</CampaignProvider>
	)
}

export default App
