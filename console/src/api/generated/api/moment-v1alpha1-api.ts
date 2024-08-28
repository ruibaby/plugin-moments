/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.17.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { JsonPatchInner } from '../models';
// @ts-ignore
import type { Moment } from '../models';
// @ts-ignore
import type { MomentList } from '../models';
/**
 * MomentV1alpha1Api - axios parameter creator
 * @export
 */
export const MomentV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create Moment
         * @param {Moment} [moment] Fresh moment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMoment: async (moment?: Moment, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/moment.halo.run/v1alpha1/moments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(moment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete Moment
         * @param {string} name Name of moment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMoment: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteMoment', 'name', name)
            const localVarPath = `/apis/moment.halo.run/v1alpha1/moments/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Moment
         * @param {string} name Name of moment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMoment: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getMoment', 'name', name)
            const localVarPath = `/apis/moment.halo.run/v1alpha1/moments/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List Moment
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMoment: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/moment.halo.run/v1alpha1/moments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch Moment
         * @param {string} name Name of moment
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMoment: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchMoment', 'name', name)
            const localVarPath = `/apis/moment.halo.run/v1alpha1/moments/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update Moment
         * @param {string} name Name of moment
         * @param {Moment} [moment] Updated moment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMoment: async (name: string, moment?: Moment, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateMoment', 'name', name)
            const localVarPath = `/apis/moment.halo.run/v1alpha1/moments/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(moment, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MomentV1alpha1Api - functional programming interface
 * @export
 */
export const MomentV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MomentV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create Moment
         * @param {Moment} [moment] Fresh moment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMoment(moment?: Moment, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Moment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMoment(moment, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MomentV1alpha1Api.createMoment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete Moment
         * @param {string} name Name of moment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMoment(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMoment(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MomentV1alpha1Api.deleteMoment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get Moment
         * @param {string} name Name of moment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMoment(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Moment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMoment(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MomentV1alpha1Api.getMoment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List Moment
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMoment(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MomentList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMoment(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MomentV1alpha1Api.listMoment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch Moment
         * @param {string} name Name of moment
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchMoment(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Moment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchMoment(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MomentV1alpha1Api.patchMoment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update Moment
         * @param {string} name Name of moment
         * @param {Moment} [moment] Updated moment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMoment(name: string, moment?: Moment, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Moment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMoment(name, moment, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MomentV1alpha1Api.updateMoment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MomentV1alpha1Api - factory interface
 * @export
 */
export const MomentV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MomentV1alpha1ApiFp(configuration)
    return {
        /**
         * Create Moment
         * @param {MomentV1alpha1ApiCreateMomentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMoment(requestParameters: MomentV1alpha1ApiCreateMomentRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Moment> {
            return localVarFp.createMoment(requestParameters.moment, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete Moment
         * @param {MomentV1alpha1ApiDeleteMomentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMoment(requestParameters: MomentV1alpha1ApiDeleteMomentRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteMoment(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Moment
         * @param {MomentV1alpha1ApiGetMomentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMoment(requestParameters: MomentV1alpha1ApiGetMomentRequest, options?: RawAxiosRequestConfig): AxiosPromise<Moment> {
            return localVarFp.getMoment(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List Moment
         * @param {MomentV1alpha1ApiListMomentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMoment(requestParameters: MomentV1alpha1ApiListMomentRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<MomentList> {
            return localVarFp.listMoment(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch Moment
         * @param {MomentV1alpha1ApiPatchMomentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMoment(requestParameters: MomentV1alpha1ApiPatchMomentRequest, options?: RawAxiosRequestConfig): AxiosPromise<Moment> {
            return localVarFp.patchMoment(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update Moment
         * @param {MomentV1alpha1ApiUpdateMomentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMoment(requestParameters: MomentV1alpha1ApiUpdateMomentRequest, options?: RawAxiosRequestConfig): AxiosPromise<Moment> {
            return localVarFp.updateMoment(requestParameters.name, requestParameters.moment, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createMoment operation in MomentV1alpha1Api.
 * @export
 * @interface MomentV1alpha1ApiCreateMomentRequest
 */
export interface MomentV1alpha1ApiCreateMomentRequest {
    /**
     * Fresh moment
     * @type {Moment}
     * @memberof MomentV1alpha1ApiCreateMoment
     */
    readonly moment?: Moment
}

/**
 * Request parameters for deleteMoment operation in MomentV1alpha1Api.
 * @export
 * @interface MomentV1alpha1ApiDeleteMomentRequest
 */
export interface MomentV1alpha1ApiDeleteMomentRequest {
    /**
     * Name of moment
     * @type {string}
     * @memberof MomentV1alpha1ApiDeleteMoment
     */
    readonly name: string
}

/**
 * Request parameters for getMoment operation in MomentV1alpha1Api.
 * @export
 * @interface MomentV1alpha1ApiGetMomentRequest
 */
export interface MomentV1alpha1ApiGetMomentRequest {
    /**
     * Name of moment
     * @type {string}
     * @memberof MomentV1alpha1ApiGetMoment
     */
    readonly name: string
}

/**
 * Request parameters for listMoment operation in MomentV1alpha1Api.
 * @export
 * @interface MomentV1alpha1ApiListMomentRequest
 */
export interface MomentV1alpha1ApiListMomentRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof MomentV1alpha1ApiListMoment
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof MomentV1alpha1ApiListMoment
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof MomentV1alpha1ApiListMoment
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof MomentV1alpha1ApiListMoment
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof MomentV1alpha1ApiListMoment
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchMoment operation in MomentV1alpha1Api.
 * @export
 * @interface MomentV1alpha1ApiPatchMomentRequest
 */
export interface MomentV1alpha1ApiPatchMomentRequest {
    /**
     * Name of moment
     * @type {string}
     * @memberof MomentV1alpha1ApiPatchMoment
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof MomentV1alpha1ApiPatchMoment
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateMoment operation in MomentV1alpha1Api.
 * @export
 * @interface MomentV1alpha1ApiUpdateMomentRequest
 */
export interface MomentV1alpha1ApiUpdateMomentRequest {
    /**
     * Name of moment
     * @type {string}
     * @memberof MomentV1alpha1ApiUpdateMoment
     */
    readonly name: string

    /**
     * Updated moment
     * @type {Moment}
     * @memberof MomentV1alpha1ApiUpdateMoment
     */
    readonly moment?: Moment
}

/**
 * MomentV1alpha1Api - object-oriented interface
 * @export
 * @class MomentV1alpha1Api
 * @extends {BaseAPI}
 */
export class MomentV1alpha1Api extends BaseAPI {
    /**
     * Create Moment
     * @param {MomentV1alpha1ApiCreateMomentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MomentV1alpha1Api
     */
    public createMoment(requestParameters: MomentV1alpha1ApiCreateMomentRequest = {}, options?: RawAxiosRequestConfig) {
        return MomentV1alpha1ApiFp(this.configuration).createMoment(requestParameters.moment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete Moment
     * @param {MomentV1alpha1ApiDeleteMomentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MomentV1alpha1Api
     */
    public deleteMoment(requestParameters: MomentV1alpha1ApiDeleteMomentRequest, options?: RawAxiosRequestConfig) {
        return MomentV1alpha1ApiFp(this.configuration).deleteMoment(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Moment
     * @param {MomentV1alpha1ApiGetMomentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MomentV1alpha1Api
     */
    public getMoment(requestParameters: MomentV1alpha1ApiGetMomentRequest, options?: RawAxiosRequestConfig) {
        return MomentV1alpha1ApiFp(this.configuration).getMoment(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List Moment
     * @param {MomentV1alpha1ApiListMomentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MomentV1alpha1Api
     */
    public listMoment(requestParameters: MomentV1alpha1ApiListMomentRequest = {}, options?: RawAxiosRequestConfig) {
        return MomentV1alpha1ApiFp(this.configuration).listMoment(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch Moment
     * @param {MomentV1alpha1ApiPatchMomentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MomentV1alpha1Api
     */
    public patchMoment(requestParameters: MomentV1alpha1ApiPatchMomentRequest, options?: RawAxiosRequestConfig) {
        return MomentV1alpha1ApiFp(this.configuration).patchMoment(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update Moment
     * @param {MomentV1alpha1ApiUpdateMomentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MomentV1alpha1Api
     */
    public updateMoment(requestParameters: MomentV1alpha1ApiUpdateMomentRequest, options?: RawAxiosRequestConfig) {
        return MomentV1alpha1ApiFp(this.configuration).updateMoment(requestParameters.name, requestParameters.moment, options).then((request) => request(this.axios, this.basePath));
    }
}
