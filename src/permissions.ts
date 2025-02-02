import type {AndroidPermissionMap} from './permissions.android';
import type {IOSPermissionMap} from './permissions.ios';
import {WebPermissionMap} from './permissions.web';
import type {WindowsPermissionMap} from './permissions.windows';

export const PERMISSIONS = Object.freeze({
  ANDROID: {} as AndroidPermissionMap,
  IOS: {} as IOSPermissionMap,
  WEB: {} as WebPermissionMap,
  WINDOWS: {} as WindowsPermissionMap,
} as const);
