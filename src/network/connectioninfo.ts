import { getCountryFlag } from "../string";

export interface IPAddresses {
	ipv4: string;
	ipv6: string;
}

export interface IPGeolocation {
	ip: string;
	loc: string;
	org: string;
	region: string;
	timezone: string;
	country: string;
	city: string;
	hostname: string;
	postal: string;
	icon?: string;
}

export async function getIPAddress(ipv6 = false): Promise<string> {
	try {
		const response = await fetch(`https://${ipv6 ? '6' : '4'}.ident.me/`);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const ipAddress = await response.text();
		return ipAddress;
	} catch (error) {
		// @ts-ignore
		throw new Error(`Error fetching IP address: ${error.message}`);
	}
}

export async function getBothIPAddresses(): Promise<IPAddresses> {
	try {
		const [ipv4Response, ipv6Response] = await Promise.all([
			fetch('https://4.ident.me/'),
			fetch('https://6.ident.me/'),
		]);

		if (!ipv4Response.ok || !ipv6Response.ok) {
			throw new Error(`HTTP error! Status: IPv4: ${ipv4Response.status}, IPv6: ${ipv6Response.status}`);
		}

		const [ipv4, ipv6] = await Promise.all([ipv4Response.text(), ipv6Response.text()]);

		return { ipv4, ipv6 };
	} catch (error) {
		// @ts-ignore
		throw new Error(`Error fetching IP addresses: ${error.message}`);
	}
}

export async function getIPGeolocation(ip: string): Promise<IPGeolocation> {
	try {
		const response = await fetch(`https://ipinfo.io/${ip}/json`);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		const geolocation: IPGeolocation = {
			ip: data.ip,
			loc: data.loc,
			org: data.org,
			region: data.region,
			timezone: data.timezone,
			country: data.country,
			city: data.city,
			hostname: data.hostname,
			postal: data.postal,
			icon: getCountryFlag(data.country) ?? undefined,
		};

		return geolocation;
	} catch (error) {
		// @ts-ignore
		throw new Error(`Error fetching IP geolocation: ${error.message}`);
	}
}