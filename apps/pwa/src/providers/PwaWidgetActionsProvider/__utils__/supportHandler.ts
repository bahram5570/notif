export const supportTicketChatHandler = (queries: string) => {
  const id = queries.split('id=')[1];

  const result = `/protected/supportTicket/${id}`;
  return result;
};

export const supportTicketNewHandler = (queries: string) => {
  const params = new URLSearchParams(queries);
  const id = params.get('id');
  const name = params.get('title');

  const result = `/protected/contactSupport?id=${id}&name=${name}`;
  return result;
};
