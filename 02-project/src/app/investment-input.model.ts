export interface InvestmentInput {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

// ANOTHER APPROACH
// export type InvestmentInput = {
//     initialInvestment: number;
//     annualInvestment: number;
//     expectedReturn: number;
//     duration: number;
// }