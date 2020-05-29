/* import { getContainerWithNestedIds } from './fragments/Container.fragments';
import { createContainerFactory } from '../types/factories/containerFactory';
import { createAccessInputFactory } from '../types/factories/accessFactory';

export const ContainerQuery = {
    getContainer: {
        resolve: async (root, { containerId }, ctx) => {
            const userId = ctx.userId;
            const accessContainer = await ctx.db.containers({
                where: {id: containerId, editors_some: {user: {id: userId}}}
            });
            return accessContainer[0];
        }
    },
    getAllContainers: {
        resolve: (root, args, ctx) => {
            const userId = ctx.userId;
            return ctx.db.containers({where: {editors_some: {user: {id: userId}}}});
        }
    }
};

export const ContainerMutation = {
    createContainer: {
        resolve: async (root, {templateId}, ctx) => {
            const userId = ctx.userId;
            const container = await ctx.db.createContainer({template: {connect:
                        {id: templateId}}, iteration: 1});
            await ctx.db.createAccess({container: {connect: {id: container.id}}, user: {connect: {id: userId}},
                right: 'ADMIN'});
            return container;
        }
    },
    createContainerIteration: {
        resolve: async (root, {containerId}, ctx) => {
            const userId = ctx.userId;
            const accessContainer = await ctx.db.$exists
                .container({id: containerId, editors_some: {right: 'ADMIN', user: {id: userId}}});
            if (accessContainer) {
                const container = await ctx.db.container({id: containerId}).$fragment(getContainerWithNestedIds);
                container.iteration += 1;
                const containerInput = createContainerFactory(container, container.template,
                    container.postIts, container.textFields);
                const newContainer = await ctx.db.createContainer(containerInput);
                for (const editor of container.editors) {
                    await ctx.db.createAccess(createAccessInputFactory(editor, editor.user, newContainer));
                }
                return newContainer;
            } else {
                throw Error('No permission to instantiate a new iteration');
            }
        }
    },
    updateContainer: {
        resolve: async (root, {containerId, data}, ctx) => {
            const userId = ctx.userId;
            const accessContainer = await ctx.db.$exists
                .access({right_not: 'READ', container: {id: containerId}, user: {id: userId}});
            if (accessContainer) {
                return ctx.db.updateContainer({data, where: {id: containerId}});
            } else {
                throw Error('No permission to update this container');
            }
        }
    },
    deleteContainer: {
        resolve: async (root, {containerId}, ctx) => {
            const userId = ctx.userId;
            const accessContainer = await ctx.db.$exists
                .access({right: 'ADMIN', container: {id: containerId}, user: {id: userId}});
            if (accessContainer) {
                return ctx.db.deleteContainer({id: containerId});
            } else {
                throw Error('No permission to delete this container');
            }
        }
    }
};

export const ContainerSubscription = {
    watchContainer: {
        subscribe: async (root, {containerId}, ctx) => {
            const userId = ctx.userId;
            const accessUser = await ctx.db.$exists.access({user: {id: userId}, container: {id: containerId}});
            if (accessUser) {
                return ctx.db.$subscribe.container({mutation_in: 'UPDATED', node: {id: containerId}}).node();
            } else {
                throw Error('No permission to subscribe');
            }
        },
        resolve: (root) => root
    }
};
 */