import { IDNSResult, IInspectionResult, IOpenAPI, ISignalData, IWHOISResult } from './interfaces';

class Agent {
	private baseUrl: string;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
	}

	private async responseBody<T>(response: Response): Promise<T> {
		const data = await response.json();
		return data;
	}

	private async get<T>(url: string): Promise<T> {
		const response = await fetch(this.baseUrl + url);
		if (!response.ok) {
			throw new Error('Network response was not ok.');
		}
		return this.responseBody<T>(response);
	}

	private async post<T, U>(url: string, body: U): Promise<T> {
		const response = await fetch(this.baseUrl + url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok.');
		}
		return this.responseBody<T>(response);
	}

	Details = {
		openapi: () => this.get<IOpenAPI>('/swagger/v1/swagger.json'),
	};

	Inspection = {
		inspect: (url: string) => this.get<IInspectionResult>('/inspect/' + encodeURIComponent(url)),
	};

	DNS = {
		dns: (url: string) => this.get<IDNSResult>(`/dns/${encodeURIComponent(url)}`),
		whois: (url: string) => this.get<IWHOISResult>(`/whois/${encodeURIComponent(url)}`),
	};

	Signalling = {
		send: (clientId: string, signalData: ISignalData) => this.post<ISignalData, any>(`/signalling/send?clientId=${encodeURIComponent(clientId)}`, signalData),
		recieve: (clientId: string) => this.get<IDNSResult>(`/signalling/receive?clientId=${encodeURIComponent(clientId)}`),
	};
}

export default Agent;
