<x-guest-layout>
    <form method="POST" action="{{ route('register') }}" class="row g-3 needs-validation">
        @csrf

        <div class="pt-4 pb-2">
            <h5 class="card-title text-center pb-0 fs-4">Register a Member</h5>
            <p class="text-center small">Enter your username & password to register</p>
        </div>

        <!-- Name -->
        <div class="col-12">
            <x-input-label for="name" :value="__('Name')" class="form-label" />
            <x-text-input id="name" class="form-control" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
            <x-input-error :messages="$errors->get('name')" class="invalid-feedback" />
        </div>

        <!-- Email Address -->
        <div class="col-12">
            <x-input-label for="email" :value="__('Email')" class="form-label" />
            <x-text-input id="email" class="form-control" type="email" name="email" :value="old('email')" required autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="invalid-feedback" />
        </div>

        <!-- Position -->
        <div class="col-12">
            <x-input-label for="position" :value="__('Position')" class="form-label" />
            <x-text-input id="position" class="form-control" type="text" name="position" :value="old('position')" required autocomplete="username" />
            <x-input-error :messages="$errors->get('position')" class="invalid-feedback" />
        </div>

        <!-- Course-Section -->
        <div class="col-12">
            <x-input-label for="course_section" :value="__('Course & Section')" class="form-label" />
            <x-text-input id="course_section" class="form-control" type="text" name="course_section" :value="old('course_section')" required autocomplete="username" />
            <x-input-error :messages="$errors->get('course_section')" class="invalid-feedback" />
        </div>

        <!-- Password -->
        <div class="col-12">
            <x-input-label for="password" :value="__('Password')" class="form-label" />
            <x-text-input id="password" class="form-control"
                            type="password"
                            name="password"
                            required autocomplete="new-password" />
            <x-input-error :messages="$errors->get('password')" class="invalid-feedback" />
        </div>

        <!-- Confirm Password -->
        <div class="col-12">
            <x-input-label for="password_confirmation" :value="__('Confirm Password')" class="form-label" />
            <x-text-input id="password_confirmation" class="form-control"
                            type="password"
                            name="password_confirmation" required autocomplete="new-password" />
            <x-input-error :messages="$errors->get('password_confirmation')" class="invalid-feedback" />
        </div>

        <div class="flex items-center justify-end mt-4">
            <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800" href="{{ route('login') }}">
                {{ __('Already registered?') }}
            </a>

            <x-primary-button class="btn btn-primary w-100">
                {{ __('Register') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout>
