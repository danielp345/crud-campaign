import { useContext } from "react"
import CampaignContext from "../context/CampaignContext"
function CampaignForm() {
	const {
		campaignData,
		setCampaignData,
		onSubmit,
		creating,
		setCreating,
		formClosing,
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
				<button className="btn create-btn" onClick={() => setCreating(true)}>
					Create new campaign
				</button>
			</div>
		)
	}

	return (
		<div>
			<form className="form" onSubmit={onSubmit}>
				<label className="form-label">Name </label>
				<input
					className="form-input"
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={onChange}
					required
				/>

				<label className="form-label">Keywords </label>
				<input
					className="form-input"
					type="text"
					name="keywords"
					id="keywords"
					value={keywords}
					onChange={onChange}
					required
				/>

				<label className="form-label">Bid amount [$] </label>
				<input
					className="form-input"
					type="number"
					name="bidAmount"
					id="bidAmount"
					value={bidAmount}
					onChange={onChange}
					required
				/>

				<label className="form-label">Fund [$] </label>
				<input
					className="form-input"
					type="number"
					name="fund"
					id="fund"
					value={fund}
					onChange={onChange}
					required
				/>

				<label className="form-label">Status </label>
				<div className="form-radio">
					<div className="radio">
						<input
							type="radio"
							name="status"
							id="status"
							value="on"
							checked={status === "on"}
							onChange={onChange}
						/>
						On
					</div>
					<div className="radio">
						<input
							type="radio"
							name="status"
							id="status"
							value="off"
							checked={status === "off"}
							onChange={onChange}
						/>
						Off
					</div>
				</div>

				<label className="form-label">Town </label>
				<div className="div-select">
					<select
						className="form-input select"
						name="town"
						id="town"
						value={town}
						onChange={onChange}
					>
						<option value="Cracow">Cracow</option>
						<option value="Warsaw">Warsaw</option>
						<option value="London">London</option>
						<option value="Paris">Paris</option>
					</select>
				</div>

				<label className="form-label">Radius [km] </label>
				<input
					className="form-input"
					type="number"
					name="radius"
					id="radius"
					value={radius}
					onChange={onChange}
					required
				/>

				<div className="form-btns">
					<button className="btn form-btn" type="submit">
						Submit
					</button>
					<button className="btn form-btn" onClick={formClosing}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	)
}

export default CampaignForm
