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
import type { ListedMoment } from '../models';
// @ts-ignore
import type { ListedMomentList } from '../models';
// @ts-ignore
import type { Moment } from '../models';
/**
 * ConsoleApiMomentHaloRunV1alpha1MomentApi - axios parameter creator
 * @export
 */
export const ConsoleApiMomentHaloRunV1alpha1MomentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a Moment.
         * @param {Moment} moment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMoment: async (moment: Moment, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'moment' is not null or undefined
            assertParamExists('createMoment', 'moment', moment)
            const localVarPath = `/apis/console.api.moment.halo.run/v1alpha1/moments`;
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
         * Get a moment by name.
         * @param {string} name Moment name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMoment: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getMoment', 'name', name)
            const localVarPath = `/apis/console.api.moment.halo.run/v1alpha1/moments/{name}`
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
         * List moments.
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {string} [keyword] Moments filtered by keyword.
         * @param {string} [ownerName] Owner name.
         * @param {string} [tag] Moment tag.
         * @param {ListMomentsVisibleEnum} [visible] Moment visible.
         * @param {string} [startDate] Moment start date.
         * @param {string} [endDate] Moment end date.
         * @param {boolean} [approved] Moment approved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMoments: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, keyword?: string, ownerName?: string, tag?: string, visible?: ListMomentsVisibleEnum, startDate?: string, endDate?: string, approved?: boolean, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/console.api.moment.halo.run/v1alpha1/moments`;
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

            if (keyword !== undefined) {
                localVarQueryParameter['keyword'] = keyword;
            }

            if (ownerName !== undefined) {
                localVarQueryParameter['ownerName'] = ownerName;
            }

            if (tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }

            if (visible !== undefined) {
                localVarQueryParameter['visible'] = visible;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString() :
                    startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = (endDate as any instanceof Date) ?
                    (endDate as any).toISOString() :
                    endDate;
            }

            if (approved !== undefined) {
                localVarQueryParameter['approved'] = approved;
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
         * List all moment tags.
         * @param {string} [name] Tag name to query
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTags: async (name?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/console.api.moment.halo.run/v1alpha1/tags`;
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

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConsoleApiMomentHaloRunV1alpha1MomentApi - functional programming interface
 * @export
 */
export const ConsoleApiMomentHaloRunV1alpha1MomentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConsoleApiMomentHaloRunV1alpha1MomentApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a Moment.
         * @param {Moment} moment 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMoment(moment: Moment, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Moment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMoment(moment, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConsoleApiMomentHaloRunV1alpha1MomentApi.createMoment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get a moment by name.
         * @param {string} name Moment name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMoment(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListedMoment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMoment(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConsoleApiMomentHaloRunV1alpha1MomentApi.getMoment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List moments.
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {string} [keyword] Moments filtered by keyword.
         * @param {string} [ownerName] Owner name.
         * @param {string} [tag] Moment tag.
         * @param {ListMomentsVisibleEnum} [visible] Moment visible.
         * @param {string} [startDate] Moment start date.
         * @param {string} [endDate] Moment end date.
         * @param {boolean} [approved] Moment approved.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listMoments(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, keyword?: string, ownerName?: string, tag?: string, visible?: ListMomentsVisibleEnum, startDate?: string, endDate?: string, approved?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListedMomentList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listMoments(page, size, labelSelector, fieldSelector, sort, keyword, ownerName, tag, visible, startDate, endDate, approved, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConsoleApiMomentHaloRunV1alpha1MomentApi.listMoments']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List all moment tags.
         * @param {string} [name] Tag name to query
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTags(name?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTags(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConsoleApiMomentHaloRunV1alpha1MomentApi.listTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ConsoleApiMomentHaloRunV1alpha1MomentApi - factory interface
 * @export
 */
export const ConsoleApiMomentHaloRunV1alpha1MomentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConsoleApiMomentHaloRunV1alpha1MomentApiFp(configuration)
    return {
        /**
         * Create a Moment.
         * @param {ConsoleApiMomentHaloRunV1alpha1MomentApiCreateMomentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMoment(requestParameters: ConsoleApiMomentHaloRunV1alpha1MomentApiCreateMomentRequest, options?: RawAxiosRequestConfig): AxiosPromise<Moment> {
            return localVarFp.createMoment(requestParameters.moment, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a moment by name.
         * @param {ConsoleApiMomentHaloRunV1alpha1MomentApiGetMomentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMoment(requestParameters: ConsoleApiMomentHaloRunV1alpha1MomentApiGetMomentRequest, options?: RawAxiosRequestConfig): AxiosPromise<ListedMoment> {
            return localVarFp.getMoment(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List moments.
         * @param {ConsoleApiMomentHaloRunV1alpha1MomentApiListMomentsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listMoments(requestParameters: ConsoleApiMomentHaloRunV1alpha1MomentApiListMomentsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ListedMomentList> {
            return localVarFp.listMoments(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, requestParameters.keyword, requestParameters.ownerName, requestParameters.tag, requestParameters.visible, requestParameters.startDate, requestParameters.endDate, requestParameters.approved, options).then((request) => request(axios, basePath));
        },
        /**
         * List all moment tags.
         * @param {ConsoleApiMomentHaloRunV1alpha1MomentApiListTagsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTags(requestParameters: ConsoleApiMomentHaloRunV1alpha1MomentApiListTagsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<string>> {
            return localVarFp.listTags(requestParameters.name, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createMoment operation in ConsoleApiMomentHaloRunV1alpha1MomentApi.
 * @export
 * @interface ConsoleApiMomentHaloRunV1alpha1MomentApiCreateMomentRequest
 */
export interface ConsoleApiMomentHaloRunV1alpha1MomentApiCreateMomentRequest {
    /**
     * 
     * @type {Moment}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiCreateMoment
     */
    readonly moment: Moment
}

/**
 * Request parameters for getMoment operation in ConsoleApiMomentHaloRunV1alpha1MomentApi.
 * @export
 * @interface ConsoleApiMomentHaloRunV1alpha1MomentApiGetMomentRequest
 */
export interface ConsoleApiMomentHaloRunV1alpha1MomentApiGetMomentRequest {
    /**
     * Moment name
     * @type {string}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiGetMoment
     */
    readonly name: string
}

/**
 * Request parameters for listMoments operation in ConsoleApiMomentHaloRunV1alpha1MomentApi.
 * @export
 * @interface ConsoleApiMomentHaloRunV1alpha1MomentApiListMomentsRequest
 */
export interface ConsoleApiMomentHaloRunV1alpha1MomentApiListMomentsRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly sort?: Array<string>

    /**
     * Moments filtered by keyword.
     * @type {string}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly keyword?: string

    /**
     * Owner name.
     * @type {string}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly ownerName?: string

    /**
     * Moment tag.
     * @type {string}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly tag?: string

    /**
     * Moment visible.
     * @type {'PUBLIC' | 'PRIVATE'}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly visible?: ListMomentsVisibleEnum

    /**
     * Moment start date.
     * @type {string}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly startDate?: string

    /**
     * Moment end date.
     * @type {string}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly endDate?: string

    /**
     * Moment approved.
     * @type {boolean}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListMoments
     */
    readonly approved?: boolean
}

/**
 * Request parameters for listTags operation in ConsoleApiMomentHaloRunV1alpha1MomentApi.
 * @export
 * @interface ConsoleApiMomentHaloRunV1alpha1MomentApiListTagsRequest
 */
export interface ConsoleApiMomentHaloRunV1alpha1MomentApiListTagsRequest {
    /**
     * Tag name to query
     * @type {string}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApiListTags
     */
    readonly name?: string
}

/**
 * ConsoleApiMomentHaloRunV1alpha1MomentApi - object-oriented interface
 * @export
 * @class ConsoleApiMomentHaloRunV1alpha1MomentApi
 * @extends {BaseAPI}
 */
export class ConsoleApiMomentHaloRunV1alpha1MomentApi extends BaseAPI {
    /**
     * Create a Moment.
     * @param {ConsoleApiMomentHaloRunV1alpha1MomentApiCreateMomentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApi
     */
    public createMoment(requestParameters: ConsoleApiMomentHaloRunV1alpha1MomentApiCreateMomentRequest, options?: RawAxiosRequestConfig) {
        return ConsoleApiMomentHaloRunV1alpha1MomentApiFp(this.configuration).createMoment(requestParameters.moment, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a moment by name.
     * @param {ConsoleApiMomentHaloRunV1alpha1MomentApiGetMomentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApi
     */
    public getMoment(requestParameters: ConsoleApiMomentHaloRunV1alpha1MomentApiGetMomentRequest, options?: RawAxiosRequestConfig) {
        return ConsoleApiMomentHaloRunV1alpha1MomentApiFp(this.configuration).getMoment(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List moments.
     * @param {ConsoleApiMomentHaloRunV1alpha1MomentApiListMomentsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApi
     */
    public listMoments(requestParameters: ConsoleApiMomentHaloRunV1alpha1MomentApiListMomentsRequest = {}, options?: RawAxiosRequestConfig) {
        return ConsoleApiMomentHaloRunV1alpha1MomentApiFp(this.configuration).listMoments(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, requestParameters.keyword, requestParameters.ownerName, requestParameters.tag, requestParameters.visible, requestParameters.startDate, requestParameters.endDate, requestParameters.approved, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all moment tags.
     * @param {ConsoleApiMomentHaloRunV1alpha1MomentApiListTagsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConsoleApiMomentHaloRunV1alpha1MomentApi
     */
    public listTags(requestParameters: ConsoleApiMomentHaloRunV1alpha1MomentApiListTagsRequest = {}, options?: RawAxiosRequestConfig) {
        return ConsoleApiMomentHaloRunV1alpha1MomentApiFp(this.configuration).listTags(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const ListMomentsVisibleEnum = {
    Public: 'PUBLIC',
    Private: 'PRIVATE'
} as const;
export type ListMomentsVisibleEnum = typeof ListMomentsVisibleEnum[keyof typeof ListMomentsVisibleEnum];
