FROM docker:dind

# Install docker-compose (it's often already in modern dind, but let's be safe)
RUN apk add --no-cache docker-cli-compose

WORKDIR /app
COPY . .

# In DinD, you usually don't need to mount the socket,
# but you MUST run the container with --privileged flag.
CMD ["docker", "compose", "up"]
