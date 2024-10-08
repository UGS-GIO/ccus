import { ExternalLink } from "lucide-react";

function BasinNamesPopup({ graphic }: { graphic: __esri.Graphic }) {
    return (
        <div className="space-y-1">
            {graphic.attributes.name && (
                <div>
                    <b>Basin Name: </b>{graphic.attributes.name}
                </div>
            )}
            {graphic.attributes.description && graphic.attributes.description.trim() && (
                <div>
                    <b>Description: </b>{graphic.attributes.description}
                </div>
            )}
            {graphic.attributes.reportlink && graphic.attributes.reportlink.trim() && (
                <div>
                    <b>Detailed Report: </b>
                    <a href={graphic.attributes.reportlink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        Opens in new tab <ExternalLink size={16} className="inline-block ml-1" />
                    </a>
                </div>
            )}
        </div>
    )
}

function OilGasFieldsPopup({ graphic }: { graphic: __esri.Graphic }) {
    return (
        <div className="space-y-1">
            {graphic.attributes.description && (
                <div>
                    <b>Description: </b>{graphic.attributes.description}
                </div>
            )}
            {graphic.attributes.name && (
                <div>
                    <b>Field Name: </b>{graphic.attributes.name}
                </div>
            )}
            {graphic.attributes.reportlink && (
                <div>
                    <b>Report Link: </b>{graphic.attributes.reportlink}
                </div>
            )}
        </div>
    )
}

function PipelinesPopup({ graphic }: { graphic: __esri.Graphic }) {
    return (
        <div className="space-y-1">
            {graphic.attributes.acronym && (
                <div>
                    <b>Acronym: </b>{graphic.attributes.acronym}
                </div>
            )}
            {graphic.attributes.coderemarks && graphic.attributes.coderemarks.trim() && (
                <div>
                    <b>Code Remarks: </b>{graphic.attributes.coderemarks}
                </div>
            )}
            {graphic.attributes.commodity && (
                <div>
                    <b>Commodity: </b>{graphic.attributes.commodity}
                </div>
            )}
            {graphic.attributes.diameter && (
                <div>
                    <b>Diameter: </b>{graphic.attributes.diameter}
                </div>
            )}
            {graphic.attributes.operator && (
                <div>
                    <b>Operator: </b>{graphic.attributes.operator}
                </div>
            )}
        </div>
    )
}

function SCO2Popup({ graphic }: { graphic: __esri.Graphic }) {
    return (
        <div className="space-y-1">
            {graphic.attributes.name && (
                <div>
                    <b>Formation Name: </b>{graphic.attributes.name}
                </div>
            )}
            {graphic.attributes.geo_region && (
                <div>
                    <b>Geological Region: </b>{graphic.attributes.geo_region}
                </div>
            )}
            {graphic.attributes.capacity_mtco2 && (
                <div>
                    <b>Capacity (Mt CO₂): </b>{graphic.attributes.capacity_mtco2}
                </div>
            )}
            {graphic.attributes.depth_m && (
                <div>
                    <b>Depth (m): </b>{graphic.attributes.depth_m}
                </div>
            )}
            {graphic.attributes.permeability_md && (
                <div>
                    <b>Permeability (mD): </b>{graphic.attributes.permeability_md}
                </div>
            )}
            {graphic.attributes.porosity && (
                <div>
                    <b>Porosity: </b>{graphic.attributes.porosity}
                </div>
            )}
            {graphic.attributes.pressure_mpa && (
                <div>
                    <b>Pressure (MPa): </b>{graphic.attributes.pressure_mpa}
                </div>
            )}
            {graphic.attributes.temperature_c && (
                <div>
                    <b>Temperature (°C): </b>{graphic.attributes.temperature_c}
                </div>
            )}
            {graphic.attributes.thickness_m && (
                <div>
                    <b>Thickness (m): </b>{graphic.attributes.thickness_m}
                </div>
            )}
            {graphic.attributes.injection_period_yrs && (
                <div>
                    <b>Injection Period (Years): </b>{graphic.attributes.injection_period_yrs}
                </div>
            )}
            {graphic.attributes.injection_well_diameter_in && (
                <div>
                    <b>Injection Well Diameter (in): </b>{graphic.attributes.injection_well_diameter_in}
                </div>
            )}
        </div>
    )
}

function RiversPopup({ graphic }: { graphic: __esri.Graphic }) {
    return (
        <div className="space-y-1">
            {graphic.attributes.name && (
                <div>
                    <b>River Name: </b>{graphic.attributes.name}
                </div>
            )}
            {graphic.attributes.length && (
                <div>
                    <b>Length: </b>{graphic.attributes.length}
                </div>
            )}
            {graphic.attributes.drainage_a && (
                <div>
                    <b>Drainage Area: </b>{graphic.attributes.drainage_a}
                </div>
            )}
        </div>
    )


}

function SeamlessGeologicalUnitsPopup({ graphic }: { graphic: __esri.Graphic }) {
    return (
        <div className="space-y-1">
            {graphic.attributes.unit_name && (
                <div>
                    <b>Unit Name: </b>{graphic.attributes.unit_name}
                </div>
            )}
            {graphic.attributes.unit_symbol && (
                <div>
                    <b>Unit Symbol: </b>{graphic.attributes.unit_symbol}
                </div>
            )}
            {graphic.attributes.age && (
                <div>
                    <b>Age: </b>{graphic.attributes.age}
                </div>
            )}
            {graphic.attributes.scale && (
                <div>
                    <b>Mapped Scale: </b>{graphic.attributes.scale}
                </div>
            )}
            {graphic.attributes.series_id && (
                <div>
                    <b>Series ID: </b>{graphic.attributes.series_id}
                </div>
            )}
            {graphic.attributes.unit_description && (
                <div>
                    <b>Unit Description: </b>{graphic.attributes.unit_description || 'N/A'}
                </div>
            )}
        </div>
    )
}


export {
    BasinNamesPopup,
    OilGasFieldsPopup,
    PipelinesPopup,
    SCO2Popup,
    RiversPopup,
    SeamlessGeologicalUnitsPopup
};
