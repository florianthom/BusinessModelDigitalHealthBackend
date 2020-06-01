/* 
query {
	getAllCanvases{
    table_id{
      key_partner_entry_ids{
        text
        note
        createdAt
      }
      reventue_stream_entry_ids{
        text
        note
        createdAt
      }
      key_activity_entry_ids{
        text
        note
        createdAt
      }
      customer_relationship_entry_ids{
        text
        note
        createdAt
      }
      value_proposition_entry_ids{
        text
        note
        createdAt
      }
      cost_structure_entry_ids{
        text
        note
        createdAt
      }
      customer_segment_entry_ids{
        text
        note
        createdAt
      }
      key_resource_entry_ids{
        text
        note
        createdAt
      }
      channel_entry_ids{
        text
        note
        createdAt
      }
      
    }
  }
}
 */

export const Table = {
    key_partner_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).key_partner_entry_ids();
    },

    reventue_stream_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).reventue_stream_entry_ids();
    },

    key_activity_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).key_activity_entry_ids();
    },

    customer_relationship_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).customer_relationship_entry_ids();
    },

    value_proposition_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).value_proposition_entry_ids();
    },

    cost_structure_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).cost_structure_entry_ids();
    },

    customer_segment_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).customer_segment_entry_ids();
    },

    key_resource_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).key_resource_entry_ids();
    },

    channel_entry_ids: (parent, args, ctx, info) => {
        return ctx.db.table({id: parent.id}).channel_entry_ids();
    },
};