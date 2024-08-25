<section>
    <header>
        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
            {{ __('Profile Information') }}
        </h2>

        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {{ __("Update your account's profile information and email address.") }}
        </p>
    </header>

    <form method="post" action="{{ route('profile.update') }}" class="mt-3 row g-3 needs-validation">
        @csrf
        @method('patch')

        <div class="col-12">
            <x-input-label for="name" :value="__('Name')" class="form-label" />
            <x-text-input id="name" name="name" type="text" class="form-control" :value="old('name', $user->name)" required autofocus autocomplete="name" />
            <x-input-error class="invalid-feedback" :messages="$errors->get('name')" />
        </div>

        <div class="col-12">
            <x-input-label for="email" :value="__('Email')" class="form-label" />
            <x-text-input id="email" name="email" type="email" class="form-control" :value="old('email', $user->email)" required autocomplete="username" />
            <x-input-error class="invalid-feedback" :messages="$errors->get('email')" />
        </div>

        <!-- Add Position Field -->
        <div class="col-12">
            <x-input-label for="position" :value="__('Position')" class="form-label" />
            <x-text-input id="position" name="position" type="text" class="form-control" :value="old('position', $user->position)" required autocomplete="position" />
            <x-input-error class="invalid-feedback" :messages="$errors->get('position')" />
        </div>

        <!-- Add Course Year Field -->
        <div class="col-12">
            <x-input-label for="course_section" :value="__('Course Section')" class="form-label" />
            <x-text-input id="course_section" name="course_section" type="text" class="form-control" :value="old('course_section', $user->course_section)" required autocomplete="course_section" />
            <x-input-error class="invalid-feedback" :messages="$errors->get('course_section')" />
        </div>

        <div class="flex items-center gap-4">
            <x-primary-button class="btn btn-primary w-100">{{ __('Save') }}</x-primary-button>

            @if (session('status') === 'profile-updated')
                <p
                    x-data="{ show: true }"
                    x-show="show"
                    x-transition
                    x-init="setTimeout(() => show = false, 2000)"
                    class="text-sm text-gray-600 dark:text-gray-400"
                >{{ __('Saved.') }}</p>
            @endif
        </div>
    </form>
</section>
