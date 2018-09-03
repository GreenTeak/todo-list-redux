#导入nginx镜像FROM nginx:1.13.7
FROM nginx:latest
#把当前打包工程的html复制到虚拟地址
ADD ./build /usr/share/nginx/html
#使用自定义nginx.conf配置端口和监听
COPY nginx.conf /etc/nginx/nginx.conf

RUN /bin/bash -c 'echo init ok!!!'