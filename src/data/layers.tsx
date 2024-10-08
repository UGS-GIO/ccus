
import CustomContent from "@arcgis/core/popup/content/CustomContent.js";
import { createRoot } from "react-dom/client";
import { LayerProps, WMSLayerProps } from "@/lib/types/mapping-types";
import Graphic from "@arcgis/core/Graphic";
import { Feature } from "geojson";
import { BasinNamesPopup, OilGasFieldsPopup, PipelinesPopup, RiversPopup, SCO2Popup, SeamlessGeologicalUnitsPopup } from "@/data/popups";

const PROD_GEOSERVER_URL = 'https://ugs-geoserver-prod-flbcoqv7oa-uc.a.run.app/geoserver/';
const ENERGY_MINERALS_WORKSPACE = 'energy_mineral';

// Basin Names WMS Layer
const basinNamesLayerName = 'basin_names';
const basinNamesLayerTitle = 'Basin Names';
const basinNamesWMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${PROD_GEOSERVER_URL}/wms`,
    title: basinNamesLayerTitle,
    visible: true,
    sublayers: [
        {
            name: `${ENERGY_MINERALS_WORKSPACE}:${basinNamesLayerName}`,
            popupEnabled: true,
            queryable: true,
            // legendUrl: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${ENERGY_MINERALS_WORKSPACE}:basin_names`,
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
const oilGasFieldsLayerName = 'basin_names';
const oilGasFieldsTitle = 'Oil and Gas Fields';
const oilGasFieldsWMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${PROD_GEOSERVER_URL}/wms`,
    title: oilGasFieldsTitle,
    visible: true,
    sublayers: [
        {
            name: oilGasFieldsLayerName,
            popupEnabled: true,
            queryable: true,
            // legendUrl: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${ENERGY_MINERALS_WORKSPACE}:oilgasfields`,
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
const pipelinesLayerName = 'pipelines';
const pipelinesTitle = 'Pipelines';
const pipelinesWMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${PROD_GEOSERVER_URL}/wms`,
    title: pipelinesTitle,
    visible: true,
    sublayers: [
        {
            name: pipelinesLayerName,
            popupEnabled: true,
            queryable: true,
            // legendUrl: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=EnergyMinerals:pipelines`,
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
const riversLayerName = 'rivers';
const riversTitle = 'Major Rivers (NEEDS TO BE ADDED TO GEOSERVER)';
const riversWMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${PROD_GEOSERVER_URL}/wms`,
    title: riversTitle,
    visible: true,
    sublayers: [
        {
            name: riversLayerName,
            popupEnabled: true,
            queryable: true,
            // legendUrl: `${GEOSERVER_URL_PROD}/${PUBLIC_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${PUBLIC_WORKSPACE}:rivers`,
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
const sco2LayerName = 'sco2_draft_13aug24';
const sco2Title = 'SCO2';
const sco2WMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${PROD_GEOSERVER_URL}/wms`,
    title: sco2Title,
    visible: true,
    sublayers: [
        {
            name: sco2LayerName,
            popupEnabled: true,
            queryable: true,
            // legendUrl: `${GEOSERVER_URL_PROD}/${ENERGY_MINERALS_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=EnergyMinerals:sco2_draft_13aug24`,
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
const seamlessGeolunitsLayerName = 'seamlessgeolunits';
const seamlessGeolunitsTitle = 'Seamless Geological Units (500k)';
const seamlessGeolunitsWMSConfig: WMSLayerProps = {
    type: 'wms',
    url: `${PROD_GEOSERVER_URL}/wms`,
    title: seamlessGeolunitsTitle,
    visible: false,
    sublayers: [
        {
            name: seamlessGeolunitsLayerName,
            popupEnabled: true,
            queryable: true,
            // legendUrl: `${GEOSERVER_URL_PROD}/${PUBLIC_WORKSPACE}/wms?REQUEST=GetLegendGraphic&VERSION=1.3.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${PUBLIC_WORKSPACE}:seamlessgeolunits`,
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
        // seamlessGeolunitsWMSConfig,
        SITLAConfig
    ]
};



const layersConfig: LayerProps[] = [
    EMPConfig
];

export default layersConfig;