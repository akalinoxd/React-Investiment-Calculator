import { useState } from 'react'
import { formatter } from '../util/investment.js'

export default function Result({ results, investments }) {
    const currentInvestments = investments

    let interestSum = 0
    let investedCapital = currentInvestments.initialInvestment
    let annualInvestment = currentInvestments.annualInvestment

    return (
        <table id="result">
            <thead>
                <tr key='investment-header'>
                    <th key={'year'}>Year</th>
                    <th key={'investment-value'}>Investment Value</th>
                    <th key={'interest-year'}>Interest(Year)</th>
                    <th key={'total-interest'}>Total Interest</th>
                    <th key={'invested-capital'}>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map(investment => {

                        interestSum += investment.interest

                        return (
                            <tr key={`investment-body-${investment.year}`}>
                                {/* year */}
                                <th key={investment.year}>
                                    {investment.year}
                                </th>
                                {/* investment value */}
                                <th key={investment.valueEndOfYear}>
                                    {formatter.format(investment.valueEndOfYear)}
                                </th>
                                {/* interest(year) */}
                                <th key={investment.interest}>
                                    {formatter.format(investment.interest)}
                                </th>
                                {/* total interest */}
                                <th key={interestSum + 1}>
                                    {formatter.format(interestSum)}
                                </th>
                                {/* invested capital */}
                                <th key={investedCapital}>
                                    {formatter.format(investedCapital += annualInvestment)}
                                </th>
                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
    )
}