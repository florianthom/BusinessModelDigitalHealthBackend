import { UserQuery, UserMutation } from "./user.resolver";
import {ProjectQuery, ProjectMutation} from "./project.resolver";

const Query = {
    ...UserQuery,
    ...ProjectQuery
}

const Mutation = {
    ...UserMutation,
    ...ProjectMutation
}

// const Subscription = {
//
//}

export const Resolver = {
    Query,
    Mutation,
    // Subscription,
    // ...NestedFields
};
