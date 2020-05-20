# Build Phase
FROM node:14.2.0 as builder
WORKDIR /app
COPY ./gmg-app ./gmg-app
COPY ./gmg-client ./gmg-client
COPY ./gmg-server ./gmg-server
COPY ./build.sh .
RUN cd /app/gmg-app && npm install && npm run build \
#    && rm -rf /app/gmg-app/node_modules \
    && cd /app/gmg-client && npm install \
    && cd /app/gmg-server && npm install

# Run Phase
FROM node:14.2.0 as runtime
WORKDIR /app/gmg-server
ENV PATH /app/gmg-server/node_modules/.bin:$PATH
COPY --from=builder /app/gmg-client /app/gmg-client
COPY --from=builder /app/gmg-server /app/gmg-server
COPY --from=builder /app/gmg-app/build /app/gmg-server/public
CMD ["npm", "run", "start:release"]
EXPOSE 8080:8080