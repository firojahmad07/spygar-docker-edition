# Use the official PHP image as the base
FROM php:8.2-fpm

# Set working directory
WORKDIR /var/www/html

# Install PHP extensions and system dependencies
RUN apt-get update && \
    apt-get --yes install --no-install-recommends \
        imagemagick \
        libmagickcore-6.q16-6-extra \
        ghostscript \
        openssh-client \
        aspell \
        aspell-en aspell-es aspell-de aspell-fr \
        git \
        curl \
        zip \
        unzip \
        libpq-dev \
        libicu-dev && \
    docker-php-ext-configure intl && \
    docker-php-ext-install \
        pdo \
        pdo_mysql \
        intl \
        opcache \
        mysqli \
        exif \
        bcmath && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


# Install mysql
RUN apt-get update && apt-get install -y default-mysql-client


# Install Node.js, npm, and Yarn
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && npm install -g yarn && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the existing application directory contents
COPY . .

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
