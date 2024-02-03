export default function InputData({ initialInvestment, annualInvestment, expectedReturn, duration }, ...props) {
    return (
        <>
            <div id="user-input" className="input-group">
                <label htmlFor="initialInvestment"> INITIAL INVESTMENT
                    <input type="number" id="initialInvestment" value={initialInvestment} onChange={props} />
                </label>
                <label htmlFor="annualInvestment"> ANNUAL INVESTMENT
                    <input type="number" id="annualInvestment" value={annualInvestment} onChange={props} />
                </label>
                <label htmlFor="expectedReturn"> EXPECTED RETURN
                    <input type="number" id="expectedReturn" value={expectedReturn} onChange={props} />
                </label>
                <label htmlFor="duration"> DURATION
                    <input type="number" id="duration" value={duration} onChange={props} />
                </label>
            </div>
        </>
    )
}