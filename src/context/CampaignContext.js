import { createContext, useState, useEffect } from "react"

const CampaignContext = createContext()

export const CampaignProvider = ({ children }) => {
	const baseUrl = "https://crud-api-json-server.herokuapp.com/campaigns"

	const [isLoading, setIsLoading] = useState(true)
	const [campaigns, setCampaigns] = useState([])
	const initialState = {
		name: "",
		keywords: "",
		bidAmount: "",
		fund: "",
		status: "on",
		town: "Cracow",
		radius: "",
	}
	const [campaignData, setCampaignData] = useState({ ...initialState })
	const [creating, setCreating] = useState(false)
	const [editing, setEditing] = useState(false)

	const formClosing = (e) => {
		e.preventDefault()
		setCampaignData(initialState)
		window.scrollTo(0, 0)
		if (editing) {
			setEditing(false)
			return
		}
		setCreating(false)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (creating) {
			createCampaign(campaignData)
		} else if (editing) {
			editCampaign(campaignData)
		}
		setCreating(false)
		setEditing(false)
		setCampaignData(initialState)
		window.scrollTo(0, 0)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		fetch(baseUrl)
			.then((res) => res.json())
			.then((data) => setCampaigns(data.reverse()))
			.catch((error) => {
				console.error("Error:", error)
			})
		setIsLoading(false)
	}

	const createCampaign = (data) => {
		fetch(baseUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then(() => {
				fetchData()
			})
			.catch((error) => {
				console.error(error)
			})
	}

	const editCampaign = (data) => {
		fetch(`${baseUrl}/${data.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then(() => {
				fetchData()
			})
			.catch((error) => {
				console.error(error)
			})
	}

	const deleteCampaign = (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			fetch(`${baseUrl}/${id}`, {
				method: "DELETE",
			}).then(() => fetchData())
		}
	}

	return (
		<CampaignContext.Provider
			value={{
				campaigns,
				campaignData,
				isLoading,
				creating,
				formClosing,
				setCreating,
				editing,
				setEditing,
				setCampaignData,
				onSubmit,
				createCampaign,
				deleteCampaign,
			}}
		>
			{children}
		</CampaignContext.Provider>
	)
}

export default CampaignContext
