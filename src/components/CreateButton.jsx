import { useContext } from "react"
import CampaignContext from "../context/CampaignContext"
function CreateButton() {
	const {
		campaignData,
		setCampaignData,
		onSubmit,
		creating,
		creatingToggle,
		editing,
	} = useContext(CampaignContext)
	const { name, keywords, bidAmount, fund, status, town, radius } = campaignData

	const onChange = (e) => {
		setCampaignData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	if (creating === false && editing === false) {
		return (
			<div>
				<button onClick={creatingToggle}>Create new campaign</button>
			</div>
		)
	}

	return (
		<div>
			<form className="form" onSubmit={onSubmit}>
				<label>
					Name
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={onChange}
						required
					/>
				</label>
				<label>
					Keywords
					<input
						type="text"
						name="keywords"
						id="keywords"
						value={keywords}
						onChange={onChange}
						required
					/>
				</label>
				<label>
					Bid amount
					<input
						type="number"
						name="bidAmount"
						id="bidAmount"
						value={bidAmount}
						onChange={onChange}
						required
					/>
				</label>
				<label>
					Fund
					<input
						type="number"
						name="fund"
						id="fund"
						value={fund}
						onChange={onChange}
						required
					/>
				</label>
				<label>
					Status
					<input
						type="radio"
						name="status"
						id="status"
						value={status}
						defaultChecked
					/>
					On
					<input type="radio" name="status" id="status" value={status} />
					Off
				</label>
				<label>
					Town
					<select name="town" id="town" value={town} onChange={onChange}>
						<option value="Cracow">Cracow</option>
						<option value="Warsaw">Warsaw</option>
					</select>
				</label>
				<label>
					Radius
					<input
						type="number"
						name="radius"
						id="radius"
						value={radius}
						onChange={onChange}
						required
					/>
				</label>
				<div>
					<button type="submit">Submit</button>
					<button onClick={creatingToggle}>Cancel</button>
				</div>
			</form>
		</div>
	)
}

export default CreateButton
