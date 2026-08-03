FROM node:22-bookworm-slim

RUN addgroup --system --gid 1001 nodex
RUN adduser --system --uid 1001 --ingroup nodex --create-home nodex

WORKDIR /app
RUN chown nodex:nodex /app

USER nodex
COPY --chown=nodex:nodex package*.json ./
RUN npm install

COPY --chown=nodex:nodex . .
EXPOSE 3008

CMD ["node", "main.js"]
