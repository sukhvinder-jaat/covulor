//Auth
export const LOGIN = '/login'

//Findings chart
export const FINDINGS_CHAT = '/findings_chart' //GET request, Requires query i.e. ?start_date & end_date 
export const TOTAL_FINDINGS = '/total_findings' //GET request, Requires query i.e. ?start_date & end_date

//Slsa threats
export const SLSA_THREATS = '/slsa_threats' //GET request, Requires query i.e. ?threat_type

//Owasp top 10
export const OWASP_TOP = '/owasp_top10'

//Software supply chain
export const SOFTWARE_SUPPLY_CHAIN = '/software_supply_chain'

//Repositories by findings
export const REPOSITORIES_FINDINGS = '/repositories_findings'
// export const REPOSITORIES_LIST = '/repositories_list' //GET request, Requires query i.e. ?rows_page & page
export const REPOSITORIES_LIST = '/repositories' //GET request,Requires params = client_id Requires query i.e. ?rows_page & page

//Scans list
export const SCANS_LIST = '/scans_list' //GET request, Requires query i.e. ?rows_page & page