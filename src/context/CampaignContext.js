import { createContext, useState, useEffect } from "react"

const CampaignContext = createContext()

export const CampaignProvider = ({ children }) => {
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

	const creatingToggle = () => {
		setCreating((prevState) => !prevState)
		setCampaignData(initialState)
	}

	useEffect(() => {
		fetchData()
	}, [])

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
	}

	const fetchData = () => {
		fetch("http://localhost:5000/campaigns")
			.then((res) => res.json())
			.then((data) => setCampaigns(data))
			.catch((error) => {
				console.error("Error:", error)
			})
		setIsLoading(false)
	}

	const createCampaign = (data) => {
		fetch("http://localhost:5000/campaigns", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.error(error)
			})

		setCampaigns([campaignData, ...campaigns])
	}

	const editCampaign = (data) => {
		fetch("http://localhost:5000/campaigns/" + data.id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.error(error)
			})

		setCampaigns(
			campaigns.map((item) =>
				item.id === data.id ? { ...item, ...data } : item
			)
		)
	}

	const deleteCampaign = (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			fetch("http://localhost:5000/campaigns/" + id, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => console.log(data))

			setCampaigns(campaigns.filter((item) => item.id !== id))
		}
	}

	return (
		<CampaignContext.Provider
			value={{
				campaigns,
				campaignData,
				isLoading,
				creating,
				creatingToggle,
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
