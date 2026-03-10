FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
RUN curl https://meeting-room-request-system.onrender.com
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 10000

CMD ["nginx", "-g", "daemon off;"]
