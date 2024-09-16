
import CustomContent from "@arcgis/core/popup/content/CustomContent.js";
import { createRoot } from "react-dom/client";
import { LayerProps, WMSLayerProps } from "@/lib/types/mapping-types";
import Graphic from "@arcgis/core/Graphic";
import { Feature } from "geojson";
import { BasinNamesPopup, OilGasFieldsPopup, PipelinesPopup, RiversPopup, SCO2Popup, SeamlessGeologicalUnitsPopup } from "@/data/popups";

const GEOSERVER_URL_PROD = 'https://ugs-geoserver-prod-flbcoqv7oa-uc.a.run.app/geoserver';
const ENERGY_MINERALS_WORKSPACE = 'EnergyMinerals';
const PUBLIC_WORKSPACE = 'public';

// Basin Names WMS Layer
const basinNamesWMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/basin_names/ows`,
    title: 'Basin Names',
    visible: true,
    sublayers: [
        {
            name: 'basin_names',
            popupEnabled: true,
            queryable: true,
            legendUrl: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${ENERGY_MINERALS_WORKSPACE}:basin_names`,
        },
    ],
    fetchFeatureInfoFunction: async (query) => {
        query.info_format = "application/json";
        const featureInfoUrl = `${basinNamesWMSConfig.url}?${new URLSearchParams(query).toString()}`;

        try {
            const response = await fetch(featureInfoUrl);
            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            return data.features.map(
                (feature: Feature) => new Graphic({
                    attributes: feature.properties,
                    popupTemplate: {
                        outFields: ['*'],
                        title: '<b>Basin Names</b>',
                        content: [
                            new CustomContent({
                                outFields: ['*'],
                                creator: (event) => {
                                    const div = document.createElement('div');
                                    if (event) {
                                        const { graphic } = event;
                                        const root = createRoot(div);
                                        root.render(<BasinNamesPopup graphic={graphic} />);
                                    }
                                    return div;
                                },
                            }),
                        ],
                    },
                })
            );
        } catch (error) {
            console.error("Failed to fetch feature info:", error);
            return [];
        }
    }
};

// Oil and Gas Fields WMS Layer
const oilGasFieldsWMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/oilgasfields/ows`,
    title: 'Oil and Gas Fields',
    visible: true,
    sublayers: [
        {
            name: 'oilgasfields',
            popupEnabled: true,
            queryable: true,
            legendUrl: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${ENERGY_MINERALS_WORKSPACE}:oilgasfields`,
        },
    ],
    fetchFeatureInfoFunction: async (query) => {
        query.info_format = "application/json";
        const featureInfoUrl = `${oilGasFieldsWMSConfig.url}?${new URLSearchParams(query).toString()}`;

        try {
            const response = await fetch(featureInfoUrl);
            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            return data.features.map(
                (feature: Feature) => new Graphic({
                    attributes: feature.properties,
                    popupTemplate: {
                        outFields: ['*'],
                        title: '<b>Oil and Gas Fields</b>',
                        content: [
                            new CustomContent({
                                outFields: ['*'],
                                creator: (event) => {
                                    const div = document.createElement('div');
                                    if (event) {
                                        const { graphic } = event;
                                        const root = createRoot(div);
                                        root.render(<OilGasFieldsPopup graphic={graphic} />);
                                    }
                                    return div;
                                },
                            }),
                        ],
                    },
                })
            );
        } catch (error) {
            console.error("Failed to fetch feature info:", error);
            return [];
        }
    }
};

// Pipelines WMS Layer
const pipelinesWMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/pipelines/ows`,
    title: 'Pipelines',
    visible: true,
    sublayers: [
        {
            name: 'pipelines',
            popupEnabled: true,
            queryable: true,
            legendUrl: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=EnergyMinerals:pipelines`,
        },
    ],
    fetchFeatureInfoFunction: async (query) => {
        query.info_format = "application/json";
        const featureInfoUrl = `${pipelinesWMSConfig.url}?${new URLSearchParams(query).toString()}`;

        try {
            const response = await fetch(featureInfoUrl);
            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            return data.features.map(
                (feature: Feature) => new Graphic({
                    attributes: feature.properties,
                    popupTemplate: {
                        outFields: ['*'],
                        title: '<b>Pipelines</b>',
                        content: [
                            new CustomContent({
                                outFields: ['*'],
                                creator: (event) => {
                                    const div = document.createElement('div');
                                    if (event) {
                                        const { graphic } = event;
                                        const root = createRoot(div);
                                        root.render(<PipelinesPopup graphic={graphic} />);
                                    }
                                    return div;
                                },
                            }),
                        ],
                    },
                })
            );
        } catch (error) {
            console.error("Failed to fetch feature info:", error);
            return [];
        }
    }
};

// Rivers WMS Layer
const riversWMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${GEOSERVER_URL_PROD}/${PUBLIC_WORKSPACE}/rivers/ows`,
    title: 'Major Rivers',
    visible: true,
    sublayers: [
        {
            name: 'rivers',
            popupEnabled: true,
            queryable: true,
            legendUrl: `${GEOSERVER_URL_PROD}/${PUBLIC_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${PUBLIC_WORKSPACE}:rivers`,
        },
    ],
    fetchFeatureInfoFunction: async (query) => {
        query.info_format = "application/json";
        const featureInfoUrl = `${riversWMSConfig.url}?${new URLSearchParams(query).toString()}`;

        try {
            const response = await fetch(featureInfoUrl);
            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            return data.features.map(
                (feature: Feature) => new Graphic({
                    attributes: feature.properties,
                    popupTemplate: {
                        outFields: ['*'],
                        title: '<b>Rivers</b>',
                        content: [
                            new CustomContent({
                                outFields: ['*'],
                                creator: (event) => {
                                    const div = document.createElement('div');
                                    if (event) {
                                        const { graphic } = event;
                                        const root = createRoot(div);
                                        root.render(<RiversPopup graphic={graphic} />);
                                    }
                                    return div;
                                },
                            }),
                        ],
                    },
                })
            );
        } catch (error) {
            console.error("Failed to fetch feature info:", error);
            return [];
        }
    }
};

// SCO2 WMS Layer
const sco2WMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/sco2_draft_13aug24/ows`,
    title: 'SCO2',
    visible: true,
    sublayers: [
        {
            name: 'sco2_draft_13aug24',
            popupEnabled: true,
            queryable: true,
            legendUrl: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=EnergyMinerals:sco2_draft_13aug24`,
        },
    ],
    fetchFeatureInfoFunction: async (query) => {
        query.info_format = "application/json";
        const featureInfoUrl = `${sco2WMSConfig.url}?${new URLSearchParams(query).toString()}`;

        try {
            const response = await fetch(featureInfoUrl);
            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            return data.features.map(
                (feature: Feature) => new Graphic({
                    attributes: feature.properties,
                    popupTemplate: {
                        outFields: ['*'],
                        title: '<b>SCO2</b>',
                        content: [
                            new CustomContent({
                                outFields: ['*'],
                                creator: (event) => {
                                    const div = document.createElement('div');
                                    if (event) {
                                        const { graphic } = event;
                                        const root = createRoot(div);
                                        root.render(<SCO2Popup graphic={graphic} />);
                                    }
                                    return div;
                                },
                            }),
                        ],
                    },
                })
            );
        } catch (error) {
            console.error("Failed to fetch feature info:", error);
            return [];
        }
    }
};

// Seamless Geological Units WMS Layer
const seamlessGeolunitsWMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${GEOSERVER_URL_PROD}/${PUBLIC_WORKSPACE}/seamlessgeolunits/ows`,
    title: 'Seamless Geological Units (500k)',
    visible: false,
    sublayers: [
        {
            name: 'seamlessgeolunits',
            popupEnabled: true,
            queryable: true,
            legendUrl: `${GEOSERVER_URL_PROD}/${PUBLIC_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${PUBLIC_WORKSPACE}:seamlessgeolunits`,
        },
    ],
    fetchFeatureInfoFunction: async (query) => {
        query.info_format = "application/json";
        const featureInfoUrl = `${seamlessGeolunitsWMSConfig.url}?${new URLSearchParams(query).toString()}`;

        try {
            const response = await fetch(featureInfoUrl);
            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();

            return data.features.map(
                (feature: Feature) => new Graphic({
                    attributes: feature.properties,
                    popupTemplate: {
                        outFields: ['*'],
                        title: '<b>Seamless Geolotical Units (500k)</b>',
                        content: [
                            new CustomContent({
                                outFields: ['*'],
                                creator: (event) => {
                                    const div = document.createElement('div');
                                    if (event) {
                                        const { graphic } = event;
                                        const root = createRoot(div);
                                        root.render(<SeamlessGeologicalUnitsPopup graphic={graphic} />);
                                    }
                                    return div;
                                },
                            }),
                        ],
                    },
                })
            );
        } catch (error) {
            console.error("Failed to fetch feature info:", error);
            return [];
        }
    }
};

// SITLA Land Ownership WMS Layer (ArcGIS REST Services Directory)
const SITLAConfig: LayerProps = {
    type: 'feature',
    url: 'https://gis.trustlands.utah.gov/mapping/rest/services/Land_Ownership_WM/MapServer/0',
    options: {
        title: 'SITLA Land Ownership',
        elevationInfo: [{ mode: 'on-the-ground' }],
        visible: false,
    },
}

// Energy and Minerals Group Layer
const EMPConfig: LayerProps = {
    type: 'group',
    title: 'Energy and Minerals',
    visible: true,
    layers: [
        basinNamesWMSConfig,
        oilGasFieldsWMSConfig,
        pipelinesWMSConfig,
        sco2WMSConfig,
        riversWMSConfig,
        seamlessGeolunitsWMSConfig,
        SITLAConfig
    ]
};



const layersConfig: LayerProps[] = [
    EMPConfig
];

export default layersConfig;