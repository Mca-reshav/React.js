import React from "react";
import './App.css'
const Sample = () => {
    let data = {
        "Status": "Success",
        "ResponseInfo": {
            "ApplicationId": 929826162,
            "SolutionSetInstanceId": "aa4e7e45-4927-4c2e-894f-103a155e3408"
        },
        "Fields": {
            "Applicants": {
                "Applicant": [
                    {
                        "ApplicantFirstName": "Jeddipelly",
                        "ApplicantMiddleName": "Srikanth",
                        "ApplicantLastName": "Reddy",
                        "DateOfBirth": "18041989",
                        "Gender": "Male",
                        "EmailAddress": "",
                        "Identifiers": {
                            "Identifier": [
                                {
                                    "IdNumber": 200598266805,
                                    "IdType": "06"
                                }
                            ]
                        },
                        "Telephones": {
                            "Telephone": {
                                "TelephoneNumber": "8886999672",
                                "TelephoneType": "01",
                                "TelephoneCountryCode": ""
                            }
                        },
                        "Addresses": {
                            "Address": {
                                "AddressType": "01",
                                "AddressLine1": "H NO 4-34, Pachchunur, Karimnagar, 505505, Andhra Pradesh, INDIA",
                                "AddressLine2": "",
                                "City": "Karimnagar",
                                "PinCode": "505505",
                                "ResidenceType": "02",
                                "StateCode": 28
                            }
                        },
                        "Services": {
                            "Service": [
                                {
                                    "Id": "CORE",
                                    "Operations": {
                                        "Operation": [
                                            {
                                                "Name": "ConsumerCIR",
                                                "Params": {
                                                    "Param": [
                                                        {
                                                            "Name": "CibilBureauFlag",
                                                            "Value": "false"
                                                        },
                                                        {
                                                            "Name": "Amount",
                                                            "Value": 35000
                                                        },
                                                        {
                                                            "Name": "Purpose",
                                                            "Value": "10"
                                                        },
                                                        {
                                                            "Name": "ScoreType",
                                                            "Value": "08"
                                                        },
                                                        {
                                                            "Name": "MemberCode",
                                                            "Value": "NB07198888_CIRC2CNPE"
                                                        },
                                                        {
                                                            "Name": "Password",
                                                            "Value": "Jq7#Hw4@Uq8#Ub"
                                                        },
                                                        {
                                                            "Name": "FormattedReport",
                                                            "Value": "true"
                                                        },
                                                        {
                                                            "Name": "GSTStateCode",
                                                            "Value": "27"
                                                        }
                                                    ]
                                                },
                                                "Id": "",
                                                "Data": {
                                                    "Response": {
                                                        "RawResponse": {
                                                            "BureauResponseXml": "<CreditReport></CreditReport>",
                                                            "SecondaryReportXml": "<Root></Root>",
                                                            "Document": {
                                                                "Name": "929826162_Cons_CIR_Jeddipelly.html",
                                                                "Id": "100072579"
                                                            }
                                                        }
                                                    }
                                                },
                                                "Status": "Pass"
                                            },
                                            {
                                                "Name": "IDV",
                                                "Params": {
                                                    "Param": [
                                                        {
                                                            "Name": "IDVerificationFlag",
                                                            "Value": "false"
                                                        },
                                                        {
                                                            "Name": "ConsumerConsentForUIDAIAuthentication",
                                                            "Value": "N"
                                                        },
                                                        {
                                                            "Name": "GSTStateCode",
                                                            "Value": "27"
                                                        }
                                                    ]
                                                },
                                                "Id": ""
                                            },
                                            {
                                                "Name": "NTC",
                                                "Params": {
                                                    "Param": [
                                                        {
                                                            "Name": "DSTuNtcFlag",
                                                            "Value": "false"
                                                        },
                                                        {
                                                            "Name": "NTCProductType",
                                                            "Value": "CC"
                                                        }
                                                    ]
                                                },
                                                "Id": ""
                                            },
                                            {
                                                "Name": "MFI",
                                                "Params": {
                                                    "Param": [
                                                        {
                                                            "Name": "MFIBureauFlag",
                                                            "Value": "true"
                                                        },
                                                        {
                                                            "Name": "MFIEnquiryAmount",
                                                            "Value": 35000
                                                        },
                                                        {
                                                            "Name": "MFILoanPurpose",
                                                            "Value": "10"
                                                        },
                                                        {
                                                            "Name": "MFICenterReferenceNo",
                                                            "Value": "center"
                                                        },
                                                        {
                                                            "Name": "MFIBranchReferenceNo",
                                                            "Value": "branch"
                                                        },
                                                        {
                                                            "Name": "GSTStateCode",
                                                            "Value": "27"
                                                        }
                                                    ]
                                                },
                                                "Id": ""
                                            }
                                        ]
                                    },
                                    "Status": "Pass",
                                    "Name": ""
                                }
                            ]
                        },
                        "ApplicantIdentifier": "30af8aff-8497-4735-a646-b09796da0456"
                    }
                ]
            },
            "ApplicationData": {
                "GSTStateCode": "27",
                "Services": {
                    "Service": {
                        "Id": "CORE",
                        "Skip": "N",
                        "Consent": "true",
                        "EnableSimulation": "False",
                        "Name": ""
                    }
                },
                "CoreHRATemplateId": "6|4",
                "AttributestoBeMask": null
            },
            "Decision": "Pass",
            "ApplicationId": "929826162"
        }
    }
    return (
        <div className="App">
            <h2>Sample page</h2>
            <table>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>ResponseInfo
                            <th>ApplicationId</th>
                            <th>SolutionSetInstanceId</th>
                        </th>
                        <th>Fields
                            <th>Applicants
                                <th>Applicant
                                    <th>ApplicantFirstName</th>
                                    <th>ApplicantLastName</th>
                                    <th>DateOfBirth</th>
                                    <th>Gender</th>
                                    <th>EmailAddress</th>
                                    <th>Identifiers
                                        <th>Identifier
                                            <th>IdNumber</th>
                                            <th>IdType</th>
                                        </th>
                                    <th>Telephones
                                        <th>Telephone
                                            <th>ApplicantFirstName</th>
                                            <th>ApplicantFirstName</th>
                                            <th>ApplicantFirstName</th>
                                        </th>
                                    </th>
                                    <th>Addresses
                                        <th>Address
                                            <th>AddressType</th>
                                            <th>AddressLine1</th>
                                            <th>AddressLine2</th>
                                            <th>City</th>
                                            <th>PinCode</th>
                                            <th>ResidenceType</th>
                                            <th>StateCode</th>
                                        </th>
                                    </th>
                                    </th>
                                    <th>Services
                                        <th>Service
                                            <th>Id</th>
                                            <th>Operations
                                                <th>Operation
                                                    <th>Name</th>
                                                    <th>Params
                                                        <th>Param
                                                            <th>Name</th>
                                                            <th>Value</th>
                                                        </th>
                                                        <th>Param
                                                            <th>Name</th>
                                                            <th>Value</th>
                                                        </th>
                                                    </th>
                                                </th>
                                            </th>
                                        </th>
                                    </th>
                                    </th>
                                </th>
                            </th>
                            <th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.2.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.2.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.3.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.3.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.4.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.4.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.5.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.5.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.6.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.6.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.7.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Params.Param.7.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Id</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Data.Response.RawResponse.BureauResponseXml</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Data.Response.RawResponse.SecondaryReportXml</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Data.Response.RawResponse.Document.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Data.Response.RawResponse.Document.Id</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.0.Status</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.1.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.1.Params.Param.0.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.1.Params.Param.0.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.1.Params.Param.1.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.1.Params.Param.1.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.1.Params.Param.2.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.1.Params.Param.2.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.1.Id</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.2.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.2.Params.Param.0.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.2.Params.Param.0.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.2.Params.Param.1.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.2.Params.Param.1.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.2.Id</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.0.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.0.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.1.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.1.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.2.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.2.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.3.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.3.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.4.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.4.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.5.Name</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Params.Param.5.Value</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Operations.Operation.3.Id</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Status</th>
						<th>Fields.Applicants.Applicant.0.Services.Service.0.Name</th>
						<th>Fields.Applicants.Applicant.0.ApplicantIdentifier</th>
						<th>Fields.ApplicationData.GSTStateCode</th>
						<th>Fields.ApplicationData.Services.Service.Id</th>
						<th>Fields.ApplicationData.Services.Service.Skip</th>
						<th>Fields.ApplicationData.Services.Service.Consent</th>
						<th>Fields.ApplicationData.Services.Service.EnableSimulation</th>
						<th>Fields.ApplicationData.Services.Service.Name</th>
						<th>Fields.ApplicationData.CoreHRATemplateId</th>
						<th>Fields.ApplicationData.AttributestoBeMask</th>
						<th>Fields.Decision</th>
						<th>Fields.ApplicationId</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.Status}</td>
                        <td>
                            <td>{data.ResponseInfo.ApplicationId}</td>
                            <td>{data.ResponseInfo.SolutionSetInstanceId}</td>
                        </td>
                        <td>Jeddipelly</td>
                        <td>Srikanth</td>
                        <td>Reddy</td>
                        <td>18041989</td>
                        <td>Male</td>
                        <td></td>
                        <td>200598266805</td>
                        <td>06</td>
                        <td>8886999672</td>
                        <td>01</td>
                        <td></td>
                        <td>01</td>
                        <td>H NO 4-34, Pachchunur, Karimnagar, 505505, Andhra Pradesh, INDIA</td>
                        <td></td>
                        <td>Karimnagar</td>
                        <td>505505</td>
                        <td>02</td>
                        <td>28</td>
                        <td>CORE</td>
                        <td>ConsumerCIR</td>
                        <td>CibilBureauFlag</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Sample