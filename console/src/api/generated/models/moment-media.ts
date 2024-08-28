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



/**
 * Media item of moment
 * @export
 * @interface MomentMedia
 */
export interface MomentMedia {
    /**
     * Origin type of media.
     * @type {string}
     * @memberof MomentMedia
     */
    'originType'?: string;
    /**
     * Type of media
     * @type {string}
     * @memberof MomentMedia
     */
    'type'?: MomentMediaTypeEnum;
    /**
     * External URL of media
     * @type {string}
     * @memberof MomentMedia
     */
    'url'?: string;
}

export const MomentMediaTypeEnum = {
    Photo: 'PHOTO',
    Video: 'VIDEO',
    Post: 'POST',
    Audio: 'AUDIO'
} as const;

export type MomentMediaTypeEnum = typeof MomentMediaTypeEnum[keyof typeof MomentMediaTypeEnum];

