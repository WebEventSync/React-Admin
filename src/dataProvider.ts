import { CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetListParams, GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, Identifier, QueryFunctionContext, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult } from "react-admin"

const URL = "http://localhost:3000/api/admin";

export const dataProvider : DataProvider = {
    getList: async function <RecordType extends RaRecord = any>(resource: string, params: GetListParams & QueryFunctionContext): Promise<GetListResult<RecordType>> {
        const page = params.pagination?.page || 1;
        const perPage = params.pagination?.perPage || 10;
        const field = params.sort?.field || "id";
        const order = params.sort?.order || "ASC";

        const query = new URLSearchParams({
        _sort: field,
        _order: order,
        _start: String((page - 1) * perPage),
        _limit: String(perPage),
        ...params.filter,
        });

        const response = await fetch(`${URL}/${resource}?${query}`, {
            credentials: "include",
            });
        const data = await response.json();

        if (resource === "sessions") {
            data.forEach((session: any) => {
                if (Array.isArray(session.speakers)) {
                    session.speakerIds = session.speakers.map((s: any) => s.speaker?.id ?? s.id);
                }
            });
        }

        return { data, total: data.length };
    },
    /********************************************************************************************/

    getOne: async function <RecordType extends RaRecord = any>(resource: string, params: GetOneParams<RecordType> & QueryFunctionContext): Promise<GetOneResult<RecordType>> {
        const response = await fetch(`${URL}/${resource}/${params.id}`, {
            credentials: "include",
            });
        const data = await response.json();
        if (resource === "sessions" && Array.isArray(data.speakers)) {
            data.speakerIds = data.speakers.map((s: any) => s.speaker?.id ?? s.id);
        }
        return {data};
    },
    /********************************************************************************************/

    getMany: async function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
        const query = new URLSearchParams({
        id: params.ids.join(","),
        });
        const response = await fetch(`${URL}/${resource}?${query}`, {
            credentials: "include",
            });
        return {data: await response.json()};
    },
    /********************************************************************************************/

    getManyReference: async function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
        const page = params.pagination?.page || 1;
        const perPage = params.pagination?.perPage || 10;
        const field = params.sort?.field || "id";
        const order = params.sort?.order || "ASC";
        const query = new URLSearchParams({
        _sort: field,
        _order: order,
        _start: String((page - 1) * perPage),
        _limit: String(perPage),
        [params.target]: params.id,
        ...params.filter,
        });
        const response = await fetch(`${URL}/${resource}?${query}`, {
            credentials: "include",
            });
        return {data: await response.json()};
    },
    /********************************************************************************************/

    update: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateParams): Promise<UpdateResult<RecordType>> {
        console.log("UPDATE called", resource, params.id, params.data);
        const response = await fetch(`${URL}/${resource}/${params.id}`, {
            credentials: "include",
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params.data),
        });
        return {data: await response.json()};
    },
    /********************************************************************************************/

    updateMany: async function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        const query = new URLSearchParams({
        id: params.ids.join(","),
        });
        const response = await fetch(`${URL}/${resource}?${query}`, {
            credentials: "include",
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params.data),
        });
        return {data: await response.json()};
    },
    /********************************************************************************************/

    create: async function <RecordType extends Omit<RaRecord, "id"> = any, ResultRecordType extends RaRecord = RecordType & { id: Identifier }>(resource: string, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
        const response = await fetch(`${URL}/${resource}`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify(params.data),
        });
        return {data: await response.json()};
    },
    /********************************************************************************************/

    delete: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        const response = await fetch(`${URL}/${resource}/${params.id}`, {
            credentials: "include",
            method: "DELETE",
        });
        return {data: await response.json()};
    },
    /********************************************************************************************/

    deleteMany: async function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        const query = new URLSearchParams({
        id: params.ids.join(","),
        });
        const response = await fetch(`${URL}/${resource}?${query}`, {
            credentials: "include",
            method: "DELETE",
        });
        return {data: await response.json()};
    }
}