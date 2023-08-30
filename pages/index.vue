<template>
    <NavigationBar />
    <HeroSection heading="Maintenance." eyebrow="This page is being developed.">
        <Text class="w-1/2">
            This page isn't finished by now. If you want to get information about the release date and you want submit
            changes or features, check out our <Href dest="https://github.com/massihperformance">GitHub repository</Href>
            and feel free to open an issue or a pull request.
        </Text>

        <div class="flex gap-2">
            <NuxtLink to="https://github.com/massihperformance">
                <WidgetButton>
                    <span>Get started</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </WidgetButton>
            </NuxtLink>

            <NuxtLink to="https://github.com/massihperformance/massihperformance.github.io">
                <WidgetLink>
                    <span>Informationen</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                </WidgetLink>
            </NuxtLink>
        </div>
    </HeroSection>
</template>