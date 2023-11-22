// API
export { APIAgentType, IDNSResult, IInspectionDetails, IInspectionResult, IInspectionTechnology, IOpenAPI, IWHOISResult } from './api/interfaces';
export { default as Agent } from './api/agent';

// String
export { RGB, HSL, CMYK, Hue, IColourValues, UserAgent, ConversionType, ConversionTime, SecondType } from './string/interfaces';
export { cmykToAll, hexToAll, hslToAll, rgbToAll, isValidColorString } from './string/colour';
export { StringConversion } from './string/conversion';
export { calculateCronString, checkForValidCronCode, decodeCronCode, encodeCronCode } from './string/cron';
export { timeOutput } from './string/time';
export { formatBytes, getCountryFlag, getUserAgent, isValidIP } from './string';

// Network
export { IPAddresses, IPGeolocation } from './network/interfaces';
export { getBothIPAddresses, getIPAddress, getIPGeolocation } from './network/connectioninfo';

// Scratch
export { IScratchpadItem, ScratchpadItemType } from './scratch/interfaces';
export { readFromLocalStorage, writeToLocalStorage } from './scratch/localStorage';
export { addScratch, createItem, getScratches, removeScratch, saveScratches, updateScratch } from './scratch/scratch';
