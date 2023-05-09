# Base image
FROM golang:1.17-alpine AS builder

WORKDIR /app

COPY populate_names.go .

# Download dependencies
RUN go mod init populate-names && \
    go get -d -v

# Build the Go script
RUN CGO_ENABLED=0 GOOS=linux go build -o populate_names populate_names.go

FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/populate_names /app

ENTRYPOINT ["./populate_names"]